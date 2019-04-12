class AddMoreColumnsToResource < ActiveRecord::Migration[5.0]
  def change
  	add_column :resources, :rsc_WSP, :string
  	add_column :resources, :rsc_WBT, :string 
  	add_column :resources, :rsc_TSC, :string
  	add_column :resources, :rsc_TM, :string
  	add_column :resources, :rsc_SLX, :string
  	add_column :resources, :rsc_SL, :string
  	add_column :resources, :rsc_GHI, :string
  	add_column :resources, :rsc_FHI, :string
  	add_column :resources, :rsc_DBT, :string
  end
end
