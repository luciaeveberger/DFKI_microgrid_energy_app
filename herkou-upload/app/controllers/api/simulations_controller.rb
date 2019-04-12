require 'net/http'
require 'net/https'

class Api::SimulationsController < API::BaseController
  respond_to :json
  skip_before_action :verify_authenticity_token
  
  # @to-do : send to actual simulator 
  def get_api_call(args_hash)
    uri = URI.parse("address of server")
    uri.query = URI.encode_www_form(what_args_you_want_to_send)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    http.request(request).body
  end


  def index
    @simulations = current_user.simulations
    respond_with :api, @simulations
  end

  def create
    @simulation = Simulation.create!(simulation_params)
    @simulation.user_id = current_user.id
    @simulation.save
    respond_with :api, @simulation
  end

  def show
    @simulation = Simulation.find(params[:id])
    respond_with :api, @simulation

  end

 def update
    @simulation = Simulation.find params[:id]
      if @simulation.update(simulation_params)
        respond_with :api
      end
  end

  def destroy
    if Simulation.find params[:id]
       @simulation = Simulation.find params[:id]
       @simulation.destroy
       respond_with :api, @simulation
    end 
  end

  def simulation_params
      params.require(:simulation).permit!
  end


  private
    def what_args_you_want_to_send
    {
      simulation: simulation
    }
    end
end
