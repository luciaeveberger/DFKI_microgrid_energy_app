class Api::ComponentsDetailController < API::BaseController
  skip_before_action :verify_authenticity_token
  # respond_to :json, 
  
  def index
    @component_detail = ComponentDetail.all
    respond_with :api, @component_detail
  end

  def show
      #@economic_details = ComponentEconomicDetail.where(component_details_id: params[:id]).first
      @component_detail = ComponentDetail.find_by(id: params[:id])
      respond_with :api, @component_detail
  end

  # @TO-DO: need to know how this would link to user object
  def create
  end

  def project_params       
    params.require(:component).permit(:type_id, :label,:domains, :type_identifier, :subtype, :manufacturer, :model, :description,:datasheet,  :url, :iconURL)   
  end 
end

