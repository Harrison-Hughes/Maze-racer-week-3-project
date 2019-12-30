class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: [matches: {except: [:created_at, :updated_at]}], except: [:created_at, :updated_at]
    end

end
