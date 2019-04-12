class Api::ComponentsGeneralParameterController < API::BaseController
  
  def index
    @general_params = ComponentGeneralParameter.all
    respond_with :api, @general_params
  end

  def show
      @general_params = ComponentGeneralParameter.find_by(component_details_id: params[:id])
      respond_with :api, @general_params
  end  
end

