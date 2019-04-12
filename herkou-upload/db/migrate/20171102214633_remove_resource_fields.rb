class RemoveResourceFields < ActiveRecord::Migration[5.0]
  def change
    	remove_column :resources, :rsc_WSP
    	remove_column :resources, :rsc_TSC
    	remove_column :resources, :rsc_TM, :string
    	remove_column :resources, :rsc_SLX, :string
    	remove_column :resources, :rsc_SL, :string
    	remove_column :resources, :rsc_GHI, :string
    	remove_column :resources, :rsc_FHI, :string
    	remove_column :resources, :rsc_DBT, :string
    	add_column :resources, :coordinates_lookup, :string
    end
end
