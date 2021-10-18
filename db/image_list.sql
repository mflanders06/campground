select *
from photos
left join sites
on photos.site_key = sites.site_key