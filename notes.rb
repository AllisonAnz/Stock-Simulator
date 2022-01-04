 def index
    @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
    #if params[:ticker] == "\"\""
      #@stock = "Enter a Symbol"
    if params[:ticker]
      @stock= StockQuote::Stock.quote(params[:ticker])
    end
    render json: @stock
  end

  rails g migration AddColumnsToStock shares:integer avg_cost:decimal total_cost:decimal

  change_column :courses, :distance, :decimal, :default => 0.0

  rails g migration change_default_for_avg_cost_and_total_cost

  class AddColumnsToStock < ActiveRecord::Migration[6.1]
  def change
    add_column :stocks, :shares, :integer
    add_column :stocks, :avg_cost, :decimal, :precision => 8, :scale => 2
    add_column :stocks, :total_cost, :decimal, :precision => 8, :scale => 2
  end
end

class ChangeDefaultForAvgCostAndTotalCost < ActiveRecord::Migration[6.1]
  def change
      change_column_default :stocks, :shares, 0
      change_column_default :stocks, :avg_cost, 0.00 
      change_column_default :stocks, :total_cost, 0.00 
    
  end
end
