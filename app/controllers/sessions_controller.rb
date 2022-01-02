class SessionsController < ApplicationController
    include CurrentUserConcern

    def create
        user = User
                .find_by(email: params["user"]["email"])
                .try(:authenticate, params["user"]["password"])

        if user
          session[:user_id] = user.id
          render json: {
              logged_in: true,
              user: user.as_json(:only => [:email, :id]),
              stocks: user.stocks.as_json(:only => [:id, :ticker])
            }, 
            status: :created
        else
          render json:  {error: "Invalid Email or Password"}, status: :not_found
        end
    end

    def logged_in 
        if @current_user 
            render json: {
                logged_in: true, 
                user: @current_user.as_json(:only => [:id, :email]),
                stocks: @current_user.stocks.as_json(:only => [:id, :ticker])
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

    
end
