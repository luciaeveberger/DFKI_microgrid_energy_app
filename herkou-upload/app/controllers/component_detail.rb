class ComponentDetail < ActiveRecord::Base
  def new
    component = Component.new
  end

  def create
    admin_dict = {:manufacterer => "Siemens"}
    component = Component.new(admin_dict)
  end

end
c = ComponentDetail.new
c.create
puts("This is the truth", c)