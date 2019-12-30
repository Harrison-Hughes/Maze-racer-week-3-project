class User < ApplicationRecord
    has_many :matches

    def self.winner_beats_loser (winner:, loser:)
        winner.win_match_against(loser)
        loser.lose_match_against(winner)
    end

    def calculate_win_ratio
        matches = self.matches
        wins = matches.select{|match| match.win == true}.length
        total = matches.length
        if wins == 0
            return '0%'
        else
            perc = (wins / total) * 100
            return "#{perc}%" 
        end
    end

    def win_match_against(loser)
        Match.create(user_id: self.id, win: true, time: Time.now, opponent: loser.name)
    end

    def lose_match_against(winner)
        Match.create(user_id: self.id, win: false, time: Time.now, opponent: winner.name)
    end

end
