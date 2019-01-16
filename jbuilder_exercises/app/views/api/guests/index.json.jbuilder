middleAgedGuests = @guests.select do |guest|
  guest.age.between?(40, 50);
end

json.array! middleAgedGuests do |guest|
  json.partial! 'api/guests/guest', guest: guest
end

