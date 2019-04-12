class AddResultsFieldToSimulations < ActiveRecord::Migration[5.0]
  def change
    add_column :simulations, :results, :string
    end
end
