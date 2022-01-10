class StocksController < ApplicationController
    include CurrentUserConcern
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
   stocks = @current_user.stocks.all
   tickers = stocks.map{|x| x[:ticker]}
   stock_quote = Stock.get_stock(tickers).to_json
   render json: stock_quote
  end

  def show 
    #byebug
    url_params = params[:id]
    @stock = @current_user.stocks.find{|stock| stock.ticker === url_params  }
    stock_quote = Stock.get_stock(url_params)
    render json: {
            stock: @stock,
            stock_quote: stock_quote
          }
  end

  def create
    add_stock = @current_user.stocks.find_or_create_by!(stock_params)
    render json: add_stock
  end
  
  # send the stock and params to stock.rb model 
  # model handles calculations before saving to database 
  # before update, total_cost is calculated
  def update 
    stock = @current_user.stocks.find(params[:id])
    
    if params[:option] == "buy"
       Stock.buy_stock(stock, params)
      stock.save!
      render json: stock
    elsif params[:option] == "sell"
      Stock.sell_stock(stock, params)
      stock.save! 
      render json: stock
    else
      render json: {error: "invalid"}
    end

    # use code below to reset stock
    #stock.update!(edit_stock_params)
    # render json: stock 
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
