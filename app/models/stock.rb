class Stock < ApplicationRecord
    belongs_to :user
    before_update :calculate_shares

    def self.get_stock(ticker) 
         @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
         stock = StockQuote::Stock.quote(ticker)
    end

    def self.update_shares(stock, new_shares)
        new_total = stock.shares + new_shares
        #byebug
        #new_total = stock.shares + new_shares
        
    end

    def calculate_shares
         self.total_cost = (self.avg_cost) * (self.shares)
        
    end

end
