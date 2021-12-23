class StocksController < ApplicationController
  def index
    @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
    #if params[:ticker] == "\"\""
      #@stock = "Enter a Symbol"
      
    if params[:ticker]
      @stock= StockQuote::Stock.quote(params[:ticker])
    end
    render json: @stock
  end
 
  
end
