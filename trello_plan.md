## Phase 1 - BoardsIndex : 6hrs
### BACKEND
#### Models:
* `Board: title, user_id`

#### Controllers:
* `BoardsController`

#### Views-HTML:
* n/a

#### JSON-API:
* `#index`, `#show`

### FRONTEND
#### Models/Collections:
* `Board`, `Boards`

#### Views:
* `BoardsIndex`, `BoardsIndexItems`

## Phase 2 - BoardShow : 9hrs
### BACKEND
#### Models:
* `List: title, board_id, ord`
* `Card: content, ord, list_id`

#### Controllers:
* `ListsController`
* `CardsController`

#### Views-HTML:
* n/a

#### JSON-API:
* `BoardsController#show` - serves the board, lists, and cards

### FRONTEND
#### Models/Collections:
* `List`, `Lists`, `Card`, `Cards`

#### Views:
* `BoardShow`, `ListIndex`, `ListShow`, `CardItem`

## Phase 3 - Drag n' Drop : 6hrs
### BACKEND
#### Models:
* n/a

#### Controllers:
* n/a

#### Views-HTML:
* n/a

#### JSON-API:
* `update` for `ListsController` and `CardsController`

### FRONTEND
#### Models/Collections:
* n/a

#### Views:
* add dragging and dropping to `ListIndex` and `ListShow`
