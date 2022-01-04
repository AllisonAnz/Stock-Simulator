class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.integer :user_id
      t.integer :shares, null: false, default: 0
      t.decimal :avg_cost, precision: 10, scale: 2, null: false, default: 0.00 
      t.decimal :total_cost, precision: 10, scale: 2, null: false, default: 0.00 

      t.timestamps
    end
    add_index :stocks, :user_id
  end
end
