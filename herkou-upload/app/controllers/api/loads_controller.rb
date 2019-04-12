class Api::LoadsController < API::BaseController
  	def index
    @generic_load = Load.all
    respond_with :api, @generic_load
  end
  def show
    @load = Load.find(params[:id])
    respond_with :api, @load
  end
end
