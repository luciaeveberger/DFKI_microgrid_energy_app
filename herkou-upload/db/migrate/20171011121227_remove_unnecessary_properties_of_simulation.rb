class RemoveUnnecessaryPropertiesOfSimulation < ActiveRecord::Migration[5.0]
  def change
  remove_column :simulations, :title, :author, :components
  end
end
