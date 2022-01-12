class ChangeColumnName < ActiveRecord::Migration[6.1]
  def change
     rename_column :transactions, :type, :option
  end
end
