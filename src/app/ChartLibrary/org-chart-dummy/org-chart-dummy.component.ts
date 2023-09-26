import { Component, OnInit } from '@angular/core';
// import Plotly from 'plotly.js-dist';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import OrgChart from "@balkangraph/orgchart.js";
import FamilyTree from "@balkangraph/familytree.js";
import { TreeStructureData } from 'src/app/Shared/material-design/DataBase/Node';
@Component({
  selector: 'app-org-chart-dummy',
  templateUrl: './org-chart-dummy.component.html',
  styleUrls: ['./org-chart-dummy.component.scss']
})
export class OrgChartDummyComponent implements OnInit {


  SearchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.SearchForm = this.fb.group({
      Fields: ['', [Validators.required]],
      Views: ['', [Validators.required]],
      Levels: ['', [Validators.required]],

    })
  }

  FieldsList = ['name', 'age', 'id', 'Designation', 'Location'];

  ViewsList = ['Top - Bottom', 'Left - Right', 'Tree View'];
  LevelsList = ['My Own', 'Level One', 'Level Two'];

  submit(){
    console.log(this.SearchForm.value)
  }
  DataTree:any[] = TreeStructureData;
  ngOnInit() {


    console.log(TreeStructureData[0].DisplayValue.split('\r\n'))
    this.DataTree.forEach((res:any) =>{
      res['pid'] = res.ParentField;
      res['id'] = res.KeyField; 
      const data = res.DisplayValue.split('\r\n');
      res['name']=res.DisplayValue.split('\r\n')[4].split(':')[1];
      console.log(data[data.length - 1])
      res['age'] = res.DisplayValue.split('\r\n')[0];
      res['designation'] = res.DisplayValue.split('\r\n')[3].split(':')[1];
      res['img'] = 'https://cdn.balkan.app/shared/m10/1.jpg'
    })
   
    // Tree Structure 

    const tree1 = document.getElementById('tree1');
            if (tree1) {
                var family = new FamilyTree(tree1, {
                    nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                    },
                });

                 family.load([
                    { id: 1, pids: [2], name: "Amber McKenzie", gender: "female", img: "https://cdn.balkan.app/shared/2.jpg"  },
                    { id: 2, pids: [1], name: "Ava Field", gender: "male", img: "https://cdn.balkan.app/shared/m30/5.jpg" },
                    { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/2.jpg" },
                    { id: 4, mid: 1, fid: 2, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg"  },
                    { id: 5, mid: 1, fid: 2, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg" }
                ]);
            }
  }
  LoadStructure(){
    console.log(this.DataTree)
    const tree = document.getElementById('tree');
    // OrgChart.templates['ana']['field_2'] = '<text class="field_2"  style="font-size: 10px;"margin-left:10px; fill="#ffffff" x="125" y="30" text-anchor="right">{val}</text>';
    OrgChart.templates['ana']['field_2'] = '<text class="field_2"  style="font-size: 10px; fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>';
    OrgChart.templates['ana']['field_3'] = '<text class="field_3"  style="font-size: 10px;" fill="#ffffff" x="125" y="50" text-anchor="middle">{val}</text>';
    OrgChart.templates['ana']['field_4'] = '<text class="field_4"  style="font-size: 10px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>';
   
    if (tree) {
      var chart = new OrgChart(tree, {
        orientation: OrgChart.orientation.left,
        mode: "dark",
        nodeBinding: {
          field_0: "name",
          img_0: "img",
          field_2: "nul",
          field_3: "age",
          field_4: "designation",

        },
      });
      chart.load(TreeStructureData)
      // chart.load([
      //   { id: 1, name: "Denny Curtis", title: "CEO", img: "../../../assets/Images/ProfileDummy/Profile5.jpg", phone: "878 108 255", email: "Ganes@yop.com" },
      //   { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg", phone: "878 108 255", email: "Ganes@yop.com" },
      //   { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg", phone: "878 108 255", email: "Ganes@yop.com" },
      //   { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg", phone: "878 108 255", email: "Ganes@yop.com" },
      //   { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg", phone: "878 108 255", email: "Ganes@yop.com" },
      //   { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg", phone: "878 108 255", email: "Ganes@yop.com" },
      //   { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg", phone: "878 108 255", email: "Ganes@yop.com" }
      // ]);
   
    }

  }



}



























   // chart.load([
      //   { id: "1", name: "Rithym", title: "CEO", phone: "878 108 255", email: "amber.mcKenzie@gmail.com", img: '../../../assets/Images/ProfileDummy/Profile5.jpg' },
      //   { id: "2", pid: "1", name: "Ganesh A", title: "IT Manager", phone: "554 484 126", email: "ava.field@live.com" },
      //   { id: "3", pid: "1", name: "Elakiya T", title: "HR Manager", phone: "897 112 444" }
      // ]);
      
      // OrgChart.templates['ana']['img_0'] = '<img src='val' class="field_1"  style="font-size: 14px;" fill="#ffffff" x="125" y="50" text-anchor="middle">';
    // OrgChart.templates.ana.field_2 = '<text class="field_2"  style="font-size: 14px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>';
    // OrgChart.templates.ana.field_3 = '<text class="field_3"  style="font-size: 14px;" fill="#ffffff" x="125" y="90" text-anchor="middle">{val}</text>';
