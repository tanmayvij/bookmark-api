# BOOKMARK-API
Basic REST API for a URL bookmarking application

## Usage
* npm install
* Set MongoDB Auth credentials/URI in config.json
* npm start

## Endpoints
Method | URL | Function
------ | --- | --------
GET | /api/bookmarks | Return all bookmarks
GET | /api/bookmarks/`bookmarkId` | Return bookmark having _id `bookmarkId`
GET | /api/bookmarks?tag=`tagId` | Return all bookmarks with the specified tag
POST | /api/bookmarks | Create a new bookmark
PUT | /api/bookmarks/`bookmarkId`?action=attach (Params: `tagId`) | Attach tag having `tagId` to bookmark having `bookmarkId`
PUT | /api/bookmarks/`bookmarkId`?action=remove (Params: `tagId`) | Remove tag having `tagId` from bookmark having `bookmarkId` 
DELETE | /api/bookmarks/`bookmarkId` | Delete the bookmark having _id `bookmarkId`
GET | /api/tags | Return all tags
GET | /api/tags/`tagId` | Return tag having _id `tagid`
POST | /api/tags | Create a new tag
DELETE | /api/tags/`tagId` | Delete the tag having _id `tagId`