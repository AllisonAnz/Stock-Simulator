class Stock < ApplicationRecord
    belongs_to :user
    #before_update :calculate_shares

    def self.get_stock(ticker) 
         @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
         stock = StockQuote::Stock.quote(ticker)
    end

    def self.update_shares(stock, new_shares)
        new_total = stock.shares + new_shares
        #byebug
        #new_total = stock.shares + new_shares
    end

    def self.buy_stock(stock, params)
        stock.shares = stock.shares + params[:shares]
        stock.avg_cost = ((stock.total_cost) + (params[:shares] * params[:avg_cost]))/stock.shares
        stock.total_cost = (stock.avg_cost) * (stock.shares)
        #byebug
    end

    def self.sell_stock(stock, params)
        #byebug
        stock.shares = stock.shares - params[:shares]
        stock.avg_cost = ((stock.total_cost) - (params[:avg_cost] * params[:shares]))
        stock.total_cost = (stock.avg_cost) * (stock.shares)
    end

    #def calculate_shares
    #     self.total_cost = (self.avg_cost) * (self.shares)
    #    
    #end

end
