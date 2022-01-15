class TransactionsController < ApplicationController
     include CurrentUserConcern

    def index 
        if @current_user 
            transactions = @current_user.transactions 
            render json: transactions 
        end
    end

    def self.new_transaction(stock, params)
         total = (params[:shares] * params[:avg_cost])
            add_transaction = Transaction.new(
                stock_id: stock.id,
                user_id: stock.user_id,
                date: Date.today,
                ticker: stock.ticker,
                shares: params[:shares],
                per_stock: params[:avg_cost],
                option: params[:option],
                total: total 
                )
            add_transaction.save!
        render json: add_transaction
    end

    private 

    def transaction_params 
         params.permit(:stock_id, :date, :ticker, :shares, :per_stock, :total, :type) 
    end
end

# stock_id: stock.id 
# ticker: stock.ticker 
# shares: params[:shares]
# per_share: params[:avg_cost]
# total : params[:shares] * params[:avg_cost]
