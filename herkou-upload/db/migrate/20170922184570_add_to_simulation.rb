class AddToSimulation < ActiveRecord::Migration[5.0]
  def change
    add_column :simulations, :project, :string
  end
end
