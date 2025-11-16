# Anilist Service

This is the backend microservice for Anilist.  
The service runs on port <code>8106</code> by default.

## 🌐 Endpoints

### Anime
| Method | Endpoint                         | Description                                           |
| ------ | -------------------------------- | ----------------------------------------------------- |
| GET    | /anime/options?name=\<NAME\>     | Get a list of anime options matching the given name   |
| GET    | /anime/info?id=\<ID\>            | Get detailed information about an anime by ID         |
| GET    | /anime/recommendations?id=\<ID\> | Get anime recommendations based on the given anime ID |

### Manga
| Method | Endpoint                         | Description                                           |
| ------ | -------------------------------- | ----------------------------------------------------- |
| GET    | /manga/options?name=\<NAME\>     | Get a list of manga options matching the given name   |
| GET    | /manga/info?id=\<ID\>            | Get detailed information about a manga by ID          |
| GET    | /manga/recommendations?id=\<ID\> | Get manga recommendations based on the given manga ID |

