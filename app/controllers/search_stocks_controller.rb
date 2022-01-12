#class SearchStocksController < ApplicationController
  #include Functions
 
  #def index  
  #  #byebug
  #    if params[:ticker]
  #      @stock= Functions::APIRequests.get_stock(params[:ticker]).to_json
  #      render json: @stock
  #    end
  #end

  #def chart 
  #  #byebug
  #    response = RestClient.get 'https://www.alphavantage.co/query', { params: {
  #        function: 'TIME_SERIES_DAILY',
  #        symbol: params[:ticker],
  #        outputsize: 'full',
  #        apikey: ENV['ALPHA_API_KEY']
  #      } }
  #      stock = JSON.parse(response)
  #     render json: stock
  #    
  #end


#end
