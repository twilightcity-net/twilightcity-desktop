import { AccountActivationStore } from "./stores/AccountActivationStore";
import {RecentJournalStore} from "./stores/RecentJournalStore";
import {NewJournalEntryStore} from "./stores/NewJournalEntryStore";
import {RecentTasksStore} from "./stores/RecentTasksStore";
import {NewTaskStore} from "./stores/NewTaskStore";
import {XPSummaryStore} from "./stores/XPSummaryStore";
import {UpdatedFlameStore} from "./stores/UpdatedFlameStore";
import {TeamWithMembersStore} from "./stores/TeamWithMembersStore";
import {UpdatedFinishStore} from "./stores/UpdatedFinishStore";

//
// this class is used to manage DataClient requests for Stores
//
export class DataStoreFactory {
  static createStore(name, scope) {
    switch (name) {
      case DataStoreFactory.Stores.ACCOUNT_ACTIVATION:
        return new AccountActivationStore(scope);
      case DataStoreFactory.Stores.NEW_JOURNAL_ENTRY:
        return new NewJournalEntryStore(scope);
      case DataStoreFactory.Stores.RECENT_JOURNAL:
        return new RecentJournalStore(scope);
      case DataStoreFactory.Stores.RECENT_TASKS:
        return new RecentTasksStore(scope);
      case DataStoreFactory.Stores.NEW_TASK:
        return new NewTaskStore(scope);
      case DataStoreFactory.Stores.XP_SUMMARY:
        return new XPSummaryStore(scope);
      case DataStoreFactory.Stores.UPDATED_FLAME:
        return new UpdatedFlameStore(scope);
      case DataStoreFactory.Stores.UPDATED_FINISH:
        return new UpdatedFinishStore(scope);
      case DataStoreFactory.Stores.TEAM_WITH_MEMBERS:
        return new TeamWithMembersStore(scope);

      default:
        return null;
    }
  }

  static get Stores() {
    return {
      ACCOUNT_ACTIVATION: "account-activation",
      RECENT_JOURNAL: "recent-journal",
      RECENT_TASKS: "recent-tasks",
      NEW_JOURNAL_ENTRY: "new-journal-entry",
      NEW_TASK: "new-task",
      XP_SUMMARY: "xp-summary",
      UPDATED_FLAME: "updated-flame",
      TEAM_WITH_MEMBERS: "team-with-members",
      UPDATED_FINISH: "updated-finish"
    };
  }
}
