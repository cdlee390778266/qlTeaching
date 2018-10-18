<template>
	<div>
	  <el-table
	    :data="tableData5"
	    style="width: 100%">
	    <el-table-column
	      label="角色名称"
	      prop="name">
	    </el-table-column>
	    <el-table-column
	      label="创建人"
	      prop="create">
	    </el-table-column>
	    <el-table-column
	      label="操作">
	    	<template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleEdit(scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.row)">删除</el-button>
		    </template>
	    </el-table-column>
	  </el-table>
		<!-- 编辑权限 -->
	  	<el-dialog title="权限设置" :visible.sync="dialogTableVisible">
			<el-tree
			  :data="data2"
			  show-checkbox
			  node-key="id"
			  ref="tree"
			  highlight-current
			  :props="defaultProps">
			</el-tree>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogTableVisible = false">取 消</el-button>
			    <el-button type="primary" @click="edit">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 删除确认 -->
	  	<el-dialog title="删除确认" :visible.sync="dialogDelVisible">
	  		<span>您确定删除此角色？</span>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogDelVisible = false">取 消</el-button>
			    <el-button type="primary" @click="del">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData5: [
	        {
	          name: '张三',
	          create: '江小王'
	        },
	         {
	          name: '张三',
	          create: '江小王'
	        },
	         {
	          name: '张三',
	          create: '江小王'
	        },
	         {
	          name: '张三',
	          create: '江小王'
	        },
	         {
	          name: '张三',
	          create: '江小王'
	        },
        ],
        dialogTableVisible: false,
        dialogDelVisible: false,
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
    	handleEdit(row) {
    		this.dialogTableVisible = true;
    	},
    	edit() {
    		alert("编辑");
    		this.dialogTableVisible = false;
    	},
    	handleDelete(row) {
    		this.dialogDelVisible = true;
    	},
    	del() {
    		alert("提交");
    		this.dialogDelVisible = false;
    	}
    }
  }
</script>