import { MongoClient, ObjectId } from "mongodb";
import { User } from "src/models/user";
import { userSchema } from "../validators/user-schema";

export class UserService {
  collection: string = "users";
  db: string = "pegasiDB";
  uri: string =
    "mongodb+srv://nathalyvillamor6:eilsktw8WX7sBMoz@pegasidb.ep5x21r.mongodb.net/";

  client: MongoClient;

  constructor() {
    this.client = new MongoClient(this.uri);
  }

  public async connect() {
    await this.client.connect();
  }

  public async getAll() {
    return await this.client
      .db(this.db)
      .collection(this.collection)
      .find({})
      .toArray();
  }

  public async getById(id: string) {
    return await this.client
      .db(this.db)
      .collection(this.collection)
      .findOne({ _id: new ObjectId(id) });
  }

  public async create(user: User) {
    await userSchema.validateAsync(user);

    return await this.client
      .db(this.db)
      .collection(this.collection)
      .insertOne(user);
  }

  public async update(id: string, user: User) {
    await userSchema.validateAsync(user);

    const query = { _id: new ObjectId(id) };
    const newvalues = {
      $set: { name: user.firstName, lastName: user.lastName },
    };
    return await this.client
      .db(this.db)
      .collection(this.collection)
      .updateOne(query, newvalues);
  }

  public async delete(id: string) {
    const query = { _id: new ObjectId(id) };
    return await this.client
      .db(this.db)
      .collection(this.collection)
      .deleteOne(query);
  }
}
