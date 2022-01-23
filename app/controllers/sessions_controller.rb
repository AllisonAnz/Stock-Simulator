class SessionsController < ApplicationController
    include CurrentUserConcern
     rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        user = User
                .find_by!(email: params["user"]["email"])
                .try(:authenticate, params["user"]["password"])

        if user
          session[:user_id] = user.id
          render json: {
              logged_in: true,
              #user: user.as_json(:only => [:email, :id,], :include => [:stocks]), <=use this in refractor?
              user: user.as_json(:only => [:email, :id,]),
              stocks: user.stocks.as_json(except: [:created_at, :updated_at])
            }, 
            status: :created
        else
          render json:  {error: "Invalid Password"}, status: :not_acceptable
        end
    end

    def logged_in 
        if @current_user 
            render json: {
                logged_in: true, 
                user: @current_user.as_json(:only => [:id, :email]),
                stocks: @current_user.stocks.as_json(:only => [:id, :ticker, :shares, :transactions])
            }
        else
            render json: {
                logged_in: false
            }
        end
    end

    def logout
        reset_session 
        render json: {status: 200, logged_out: true} 
    end

    private 

      def render_not_found_response 
        render json: { error: "Email Not found" }, status: :not_found
    end

    
end