require 'net/http'
require 'uri'
require 'json'
require 'mime/types'

class Api::SimulationParserController < API::BaseController
   respond_to :json
   skip_before_action :verify_authenticity_token

    def create
      params = simulation_params
      header = {"Content-Type": "application/json"}
      # @need to change the linking here to be environment specific => testing => heroku/another block
      uri = URI.parse("http://localhost:8080/simulation-handler")
      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Post.new(uri.request_uri, header)
      request.body = params.to_json
      response = http.request(request)
      puts response
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