require 'sinatra'
require 'erb'

set :bind, '0.0.0.0'

get '/' do
    name = 'Button Poodler'
    template = File.read('./homepage.html.erb')
    erb_processor = ERB.new(template)
    return erb_processor.result(binding)
end
