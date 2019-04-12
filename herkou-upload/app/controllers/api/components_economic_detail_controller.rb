class Api::ComponentsEconomicDetailController < API::BaseController
  
  def index
    @component_detail = ComponentEconomicDetail.all
    # respond_with :api, @component_detail
  end

  def show
      #@economic_details = ComponentEconomicDetail.where(component_details_id: params[:id]).first
      @economic_detail = ComponentEconomicDetail.find_by(component_details_id: params[:id])
      respond_with :api, @economic_detail
  end  
end

