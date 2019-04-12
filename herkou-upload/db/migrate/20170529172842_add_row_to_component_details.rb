class AddRowToComponentDetails < ActiveRecord::Migration[5.0]
  def change
    add_column :component_details, :classification_id, :string
  end
end
