class SearchStocksController < ApplicationController
 
  def index  
    #byebug
      if params[:ticker]
        @stock= Stock.get_stock(params[:ticker])
        #byebug
        render json: @stock
      end
    end

end
