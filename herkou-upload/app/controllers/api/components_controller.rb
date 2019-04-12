class Api::ComponentsController < API::BaseController
  skip_before_action :verify_authenticity_token
  # respond_to :json, 
  
  def index
    @component_detail = ComponentType.all
    #@projects = Project.all
    respond_with :api, @component_detail
  end
end
