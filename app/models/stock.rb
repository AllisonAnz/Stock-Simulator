class Stock < ApplicationRecord
    belongs_to :user
    has_many :transactions
  
    def fetch_chart
        response = RestClient.get 'https://www.alphavantage.co/query', { params: {
          function: 'TIME_SERIES_DAILY_ADJUSTED',
          symbol: symbol.to_s,
          outputsize: 'full',
          apikey: ENV['ALPHA_VANTAGE_API_KEY']
        } }
        stock = JSON.parse(response)
        self.prices = stock['Time Series (Daily)'].map do |k, v|
          { date: k.to_date, price: v.values[4].to_f }
    end
  end

end
