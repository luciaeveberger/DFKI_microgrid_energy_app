class Simulation < ActiveRecord::Migration[5.0]
  def change
    add_column :simulations, :result1, :string
  end
end
