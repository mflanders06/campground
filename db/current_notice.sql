SELECT notice
FROM notices
WHERE startdate < CURRENT_DATE AND enddate > CURRENT_DATE;