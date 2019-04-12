class Addscssclasstocomponentdetails < ActiveRecord::Migration[5.0]
  def change
  	 add_column :component_details, :cssClass, :string
  end
end
