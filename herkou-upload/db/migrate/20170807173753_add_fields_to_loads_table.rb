class AddFieldsToLoadsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :loads, :load_description, :string
    add_column :loads, :loaCL, :string
    add_column :loads, :loaEL, :string
    add_column :loads, :loa_HE_HT, :string
    add_column :loads, :loa_HE_HW, :string
  end
end
