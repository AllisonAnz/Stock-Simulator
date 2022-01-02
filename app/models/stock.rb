class Stock < ApplicationRecord
    belongs_to :user

    def self.get_stock(ticker) 
        
         @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
         
         stock = StockQuote::Stock.quote(ticker).to_json
    end
end
