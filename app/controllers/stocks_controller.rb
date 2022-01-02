class StocksController < ApplicationController
    include CurrentUserConcern
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
   stocks = @current_user.stocks.all
   render json: stocks
  end

  def show 
  end

  def create
    
    add_stock = @current_user.stocks.find_or_create_by!(stock_params)
    render json: add_stock
  end

  private 

  def stock_params 
    params.permit(:ticker)
  end

   def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
