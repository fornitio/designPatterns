class Query {
  constructor(table) {
    this.table = table;
    this.columns = [];
    this.filters = [];
  }

  select(...columns) {
    this.columns.push(...columns);
    return this;
  }

  where(column, operator, value) {
    this.filters.push({ column, operator, value });
    return this;
  }

  toSQL() {
    let sql = `SELECT ${this.columns.join(', ')} FROM ${this.table}`;
    if (this.filters.length > 0) {
      sql += ' WHERE';
      for (const { column, operator, value } of this.filters) {
        sql += ` ${column} ${operator} ${value} AND`;
      }
      sql = sql.slice(0, -4);
    }
    return sql;
  }
}

const users = new Query('users');
const sql = users
  .select('id', 'name', 'email')
  .where('age', '>', 18)
  .where('country', '=', 'US')
  .toSQL();

console.log(sql);  // SELECT id, name, email FROM users WHERE age > 18 AND country = US

/*
Query class represents a SQL query. The select and where methods allow users of the DSL to specify the desired columns and filters for the query in a declarative way. The toSQL method then generates the corresponding SQL statement based on the selected columns and filters. This allows users of the DSL to focus on expressing the desired result (the selected columns and filters) rather than on the details of how to achieve it (the SQL syntax).
*/

