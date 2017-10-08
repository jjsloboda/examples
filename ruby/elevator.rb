

class Elevator
    attr_reader :floor

    def initialize()
        @floor = 1
    end

    def go_up
        if @floor < 12
            @floor += 1
            cheery_greeting
        end
    end

    def go_down
        if @floor > 1
            @floor -= 1
            cheery_greeting
        end
    end

    def cheery_greeting
        puts "Welcome to Floor #{@floor}"
    end
end
