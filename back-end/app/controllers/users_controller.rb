class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include:
            [
                matches: {
                    except: [:created_at, :updated_at]
                }
            ], except: [:created_at, :updated_at]
    end

    def show
        user = User.find_by(id: params[:id])
        # byebug

        render json: user, include:
        [
            matches: {
                except:[:created_at,:updated_at]
            }
        ], except:[:created_at,:updated_at]
    end

    def create 
        user = User.create(name: params[:name])
        render json: User.all, except: [:created_at, :updated_at]
    end 


end
