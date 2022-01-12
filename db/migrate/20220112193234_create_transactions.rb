class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.date :date 
      t.string :ticker
      t.integer :shares
      t.decimal :per_stock, precision: 15, scale: 2
      t.decimal :total, precision: 15, scale: 2
      
      t.integer :stock_id


      t.timestamps
    end
  end
end

# You Sold 3 stocks at $ per share total