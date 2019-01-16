class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render :show
    else
      flash.now[:errors] = @pokemon.errors.full_messages
      render :index
    end
  end
  
  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end