require 'net/http'
require 'json'

class Api::ResourcesController < API::BaseController
  	def index
    @resource = Resource.all
    respond_with :api, @resource
  end
  
  def show
        uri = URI.parse(params[:web_address])
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        @data = http.get(uri.request_uri)
        @return_object = {'data' =>  @data.body}
        respond_with :api, @return_object.to_json

  end

end
