class Component
  #include ActiveModel::Model
  attr_accessor :type
  attr_accessor :administrative
  attr_accessor :economic
  attr_accessor :economic

  #attr_accessor :administrative
  def initialize(params={})
    self.administrative=params[:administrative]
      #etc for the other fields you want to define just make sure you added them above with attr_accessor or you wont be able to define them.  Attr_accessor is a pure ruby method if it's new to you.
  end
end

c = Component.new
puts("This is the truth", c)