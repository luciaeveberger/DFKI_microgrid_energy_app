class Api::ComponentsInstallationParameterController < API::BaseController
  
  def index
    @component_detail = ComponentInstallationParameter.all
    # respond_with :api, @component_detail
  end

  def show
      @economic_detail = ComponentInstallationParameter.find_by(component_details_id: params[:id])
      respond_with :api, @economic_detail
  end  
end

