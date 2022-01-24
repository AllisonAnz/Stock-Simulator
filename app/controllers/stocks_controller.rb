class StocksController < ApplicationController
    include CurrentUserConcern
    include Functions
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    if @current_user 
      stocks = @current_user.stocks.all
      tickers = stocks.map{|x| x[:ticker]}
      stock_quote = Functions::APIRequests.get_stock(tickers).to_json
      render json: stock_quote
     
    else
        @stock= Functions::APIRequests.get_stock(params[:ticker]).to_json
        render json: @stock
    end
  end

  def show 
    #byebug
    url_params = params[:id]
    @stock = @current_user.stocks.find{|stock| stock.ticker === url_params  }
    company_info = Functions::APIRequests.get_company_info(url_params)
    stock_quote = Functions::APIRequests.get_stock(url_params)
    render json: {
            stock: @stock.as_json(except: [:created_at, :updated_at]),
            stock_quote: stock_quote,
            company_info: company_info,
            transactions: @stock.transactions.as_json(except: [:created_at, :updated_at])
    } 
  end
 
  def create
    add_stock = @current_user.stocks.find_or_create_by!(stock_params)
    render json: add_stock
  end
  
  # send the stock and params to stock.rb module
  # module handles calculations before saving to database 
  # before update, total_cost is calculated
  def update 
    stock = @current_user.stocks.find(params[:id])
    #byebug
    if params[:option] === "Purchased"
      Functions::StockCalcs.buy_stock(stock, params)
      TransactionsController.new_transaction(stock,params)
               
      stock.save!
      render json: stock
    elsif params[:option] === "Sold"
      Functions::StockCalcs.sell_stock(stock, params)
      TransactionsController.new_transaction(stock,params)
      stock.save! 
      render json: stock
    else
      render json: {error: "invalid"}
    end

  end

  def destroy 
    stock = @current_user.stocks.find(params[:id])
    if stock.shares === 0 
      stock.delete
      head :no_content
    else 
      render json: {error: "sell stock first"}
    end
  end

  def find_chart 
   stock = Functions::APIRequests.request_chart(params)
   render json: stock 
  end


  private 

  def stock_params 
    params.permit(:ticker)
  end

  def edit_stock_params
    params.permit(:shares, :avg_cost, :total_cost) 
  end

   def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
