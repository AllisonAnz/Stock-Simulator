class TransactionsController < ApplicationController

    def self.new_transaction(stock, params)
         total = (params[:shares] * params[:avg_cost])
            add_transaction = Transaction.new(
                stock_id: stock.id,
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
